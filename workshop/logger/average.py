import pandas as pd

# Read the CSV file
df = pd.read_csv('updated_file_with_no_outliers.csv')

# Ensure 'date_time' is in datetime format
df['date_time'] = pd.to_datetime(df['date_time'])

# Set 'date_time' as index
df.set_index('date_time', inplace=True)

# Resample the data to hourly frequency and calculate the mean
hourly_df = df.resample('h').mean()

hourly_df = hourly_df.round(0).astype(int)

# Reset the index to have 'date_time' as a column
hourly_df.reset_index(inplace=True)

# Save the hourly averaged DataFrame to a new CSV file
hourly_df.to_csv('hourly_averages.csv', index=False)
