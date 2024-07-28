import pandas as pd
import matplotlib.pyplot as plt

def replace_outliers_with_median(df, column, window='15min', threshold=3):
    # Ensure the column is of float type to avoid dtype incompatibility issues
    df[column] = df[column].astype(float)
    
    # Calculate rolling median
    rolling_median = df[column].rolling(window, min_periods=1).median()
    
    # Calculate the Median Absolute Deviation (MAD)
    deviation_from_median = (df[column] - rolling_median).abs()
    mad = deviation_from_median.rolling(window, min_periods=1).median()
    
    # Calculate the threshold using MAD
    modified_z_score = 0.6745 * deviation_from_median / mad
    outlier_mask = modified_z_score > threshold
    
    # Count the number of outliers
    outlier_count = outlier_mask.sum()
    
    # Replace outliers with the rolling median
    df.loc[outlier_mask, column] = rolling_median[outlier_mask]
    
    # Convert the column back to integer type
    df[column] = df[column].astype(int)
    
    return df, outlier_count

# Read the CSV file
df = pd.read_csv('updated_file.csv')

# Ensure 'date_time' is in datetime format
df['date_time'] = pd.to_datetime(df['date_time'])

# Set 'date_time' as index
df.set_index('date_time', inplace=True)

# Define the columns to check for outliers
reading_columns = ['reading1', 'reading2', 'reading3', 'reading4', 'reading5', 'reading6']

outlier_counts = {}

# Apply the outlier replacement for each reading column
for column in reading_columns:
    df, outlier_count = replace_outliers_with_median(df, column, window='15min', threshold=3)
    outlier_counts[column] = outlier_count

# Save the updated DataFrame to a new CSV file
df.to_csv('updated_file_with_no_outliers.csv')

for column, count in outlier_counts.items():
    print(f'{column}: {count} outliers detected')

# Plot each reading column against date_time
plt.figure(figsize=(12, 8))

reading_no='reading2'

plt.plot(df.index, df[reading_no], label=reading_no)

plt.xlabel('Date Time')
plt.ylabel('Reading Values')
plt.title('Readings Over Time')
plt.legend()
plt.grid(True)
plt.show()
