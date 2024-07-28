
import pandas as pd
import matplotlib.pyplot as plt

# Read the CSV file
# df = pd.read_csv('updated_file.csv')
df = pd.read_csv('updated_file_with_no_outliers.csv')
# df = pd.read_csv('hourly_averages.csv')
# df =pd.read_csv('hourly_differences.csv')

# Ensure 'date_time' is in datetime format
df['date_time'] = pd.to_datetime(df['date_time'])

# Plot each reading column against date_time
plt.figure(figsize=(12, 8))

for column in ['reading5']:
    plt.plot(df['date_time'], df[column], label=column)

plt.xlabel('Date Time')
plt.ylabel('Reading Values')
plt.title('Readings Over Time')
plt.legend()
plt.grid(True)
plt.show()






