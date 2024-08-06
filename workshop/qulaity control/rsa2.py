import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Constants
Lm = 80.331871  # station longitude in degree
Lz = 82.5       # longitude of std time meridian
L = 26.449923   # latitude
elev = 112      # elevation
Gsc = 0.082     # solar constant in MJ/m^2/min
sigma = 4.9e-9  # MJ/m2/day/K^4

# Load your data file here
# Replace 'your_data_file.csv' with the path to your CSV file
AWS3_avg = pd.read_csv('aws3.csv')
solar_rad=AWS3_avg['SolarRadiation']
aws_date=AWS3_avg['Date']

# Ensure that the Date column is parsed as datetime
AWS3_avg['Date'] = pd.to_datetime(AWS3_avg['Date'], format='%d/%m/%Y')

# Extracting the day of the year from Date
J = AWS3_avg['Date'].dt.dayofyear

# Calculations
phi = np.pi * L / 180  # Latitude in radians converted from latitude (L) in degrees
dr = 1 + 0.033 * np.cos(2 * np.pi * J / 365)  # correction for eccentricity of Earth's orbit around the sun
delta = 0.409 * np.sin((2 * np.pi * J / 365) - 1.39)  # declination of the sun above the celestial equator in radians
ws = np.arccos(-np.tan(phi) * np.tan(delta))  # sunshine hour angle

# Ra is extraterrestrial radiation in MJ/m^2/day
Ra = (24 * 60 / np.pi) * (dr * Gsc) * (ws * np.sin(delta) * np.sin(phi) + np.cos(phi) * np.cos(delta) * np.sin(ws))

# Convert Ra to W/m^2 by dividing by 0.0864
Ra_wm2 = Ra / 0.0864

# Clear-sky solar radiation [MJ m-2 day-1]
Rso = (0.75 + 2e-5 * elev) * Ra
Rso_wm2 = Rso / 0.0864


plt.figure(figsize=(10, 6))
plt.plot(AWS3_avg['Date'], Ra_wm2, label='Ra', linewidth=2)
plt.plot(AWS3_avg['Date'], 0.03 * Ra_wm2, label='0.03*Ra', linewidth=2)
plt.plot(AWS3_avg['Date'], Rso_wm2, label='Rso', linewidth=2)

data=AWS3_avg['SolarRadiation']

# Group by date and calculate the average SolarRadiation
daily_avg = AWS3_avg.groupby('Date')['SolarRadiation'].mean().reset_index()

# Reset the index to have the date as a column
daily_avg = daily_avg.reset_index()

print(daily_avg)



daily_avg['Date'] = pd.to_datetime(daily_avg['Date'], format='%d/%m/%Y')

# Extracting the day of the year from Date
J = daily_avg['Date'].dt.dayofyear

# Calculations
phi = np.pi * L / 180  # Latitude in radians converted from latitude (L) in degrees
dr = 1 + 0.033 * np.cos(2 * np.pi * J / 365)  # correction for eccentricity of Earth's orbit around the sun
delta = 0.409 * np.sin((2 * np.pi * J / 365) - 1.39)  # declination of the sun above the celestial equator in radians
ws = np.arccos(-np.tan(phi) * np.tan(delta))  # sunshine hour angle

# Ra is extraterrestrial radiation in MJ/m^2/day
Ra = (24 * 60 / np.pi) * (dr * Gsc) * (ws * np.sin(delta) * np.sin(phi) + np.cos(phi) * np.cos(delta) * np.sin(ws))

# Convert Ra to W/m^2 by dividing by 0.0864
Ra_wm2 = Ra / 0.0864

# Clear-sky solar radiation [MJ m-2 day-1]
Rso = (0.75 + 2e-5 * elev) * Ra
Rso_wm2 = Rso / 0.0864


new_data=daily_avg['SolarRadiation']
# filtered_df = AWS3_avg[AWS3_avg['Date'].isin(daily_avg['Date'])]
# filtered_df['SolarRadiation']=new_data

plt.plot(daily_avg['Date'], daily_avg['SolarRadiation'], 'o', label='Observed Solar Radiation',ms=2)
obs_radiation=daily_avg['SolarRadiation']
daily_avg['SolarRadiation']=np.where(Rso_wm2>daily_avg['SolarRadiation'] ,daily_avg['SolarRadiation'],-1)
daily_avg['SolarRadiation']=np.where(0.03*Ra_wm2<daily_avg['SolarRadiation'] ,daily_avg['SolarRadiation'],None)
daily_avg['SolarRadiation']=np.where(daily_avg['SolarRadiation']==-1,None,daily_avg['SolarRadiation'])
# Using apply to ensure correct date assignment
daily_avg['faulty_dates'] = daily_avg.apply(lambda row: row['Date'] if obs_radiation[row.name] != row['SolarRadiation'] else pd.NaT, axis=1)

print(daily_avg)
fault_dates=daily_avg['faulty_dates']

fault_dates=fault_dates.dropna()
print(fault_dates.sum)

newdf=AWS3_avg['SolarRadiation']
AWS3_avg.loc[AWS3_avg['Date'].isin(fault_dates), 'SolarRadiation'] = None
AWS3_avg[f"flag_SolarRadiation"]=np.where(newdf==AWS3_avg['SolarRadiation'],0,1)

AWS3_avg.to_csv("free.csv",index=False)



# columns_keep=['Date','SolarRadiation','Time']
# filtered_df=filtered_df[columns_keep]
# print(filtered_df['Date',])

# Plotting


plt.plot(daily_avg['Date'], daily_avg['SolarRadiation'], 'o', label='filtered Solar Radiation',ms=2)
# plt.plot(daily_avg['Date'], filtered_df['SolarRadiation'], 'o', label='Observed Solar Radiation',ms=2)

# Title and labels
plt.title('Solar Radiation after Comparison', fontsize=14)
plt.xlabel('Date', fontsize=12)
plt.ylabel('Solar Radiation (W/m^2)', fontsize=12)
plt.legend(fontsize=10)
plt.show()
