import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv('Final_aws3.csv')

# Ensure the 'date' column is in datetime format (if not already)
df['Date'] = pd.to_datetime(df['Date'],format='%d/%m/%Y')

# Set the 'date' column as the index
df.set_index('Date', inplace=True)





# Load the CSV file into a DataFrame


# Calculate the upper and lower limits for Temp
df['Temp_upper'] = 50.01 - 0.201 * df['new_step_RH1']
df['Temp_lower'] = 29.76 - 0.298 * df['new_step_RH1']

# Check if Temp is within the limits
df['within_limits'] = df.apply(lambda row: row['Temp_lower'] <= row['new_step_Temp1'] <= row['Temp_upper'], axis=1)

# Print the DataFrame to see the results
print(df)
df['flag_internal_temp']=np.where(df['within_limits']==True,0,3)
columns=['new_step_RH1','new_step_Temp1','within_limits','flag_internal_temp']
new_df=df[columns]
new_df.to_csv('internal.csv',index=False)

# Plotting the data
plt.figure(figsize=(10, 6))
plt.scatter(df['new_step_RH1'], df['new_step_Temp1'], label='Temperature', color='blue')

# Plot the upper and lower limit lines
plt.plot(df['new_step_RH1'], df['Temp_upper'], label='Upper Limit', linestyle='--', color='red')
plt.plot(df['new_step_RH1'], df['Temp_lower'], label='Lower Limit', linestyle='--', color='green')

# Highlight points that are out of limits
out_of_limits = df[~df['within_limits']]

out_of_limits_count = (~df['within_limits']).sum()
print(f"Number of out-of-limits temperatures: {out_of_limits_count}")


plt.scatter(out_of_limits['new_step_RH1'], out_of_limits['new_step_Temp1'], color='black', label='Out of limits', zorder=5)

plt.xlabel('Relative Humidity (RH)')
plt.ylabel('Temperature (Temp)')
plt.title('Temperature vs. Relative Humidity with Limits')
plt.legend()
plt.show()
