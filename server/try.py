import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_csv('AWS3.csv')

# Remove leading and trailing whitespaces from each column
first_column_name = df.columns[0]  # Assuming the first column name is 'Date & Time'
df[first_column_name] = df[first_column_name].str.replace(" ", "")# Save the modified DataFrame back to a CSV file
second_column_name = df.columns[1]
df[second_column_name] = df[second_column_name].str.replace(" ", "")#
df.to_csv('modified_file.csv', index=False)
