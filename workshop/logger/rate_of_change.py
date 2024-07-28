import pandas as pd

# Read the CSV file with hourly averages
hourly_df = pd.read_csv('hourly_averages.csv')

# Ensure 'date_time' is in datetime format
hourly_df['date_time'] = pd.to_datetime(hourly_df['date_time'])

# Set 'date_time' as index
hourly_df.set_index('date_time', inplace=True)

# Calculate the consecutive difference per hour for each reading column
reading_columns = ['reading1','reading2','reading3','reading4','reading5','reading6']

for column in reading_columns:
    hourly_df[f'{column}_diff'] = hourly_df[column].diff()

# Reset the index to have 'date_time' as a column
hourly_df.reset_index(inplace=True)

# Save the DataFrame with consecutive differences to a new CSV file
hourly_diffs_csv = 'hourly_differences.csv'
hourly_df.to_csv(hourly_diffs_csv, index=False)
