import pandas as pd
input_csv_path = 'input.csv'
output_csv_path = 'output.csv'
try:       
    # Load the CSV file into a DataFrame
    df = pd.read_csv(input_csv_path)

    # Split the "Date & Time" column into separate "Date" and "Time" columns
    df[['Date', 'Time']] = df['Date & Time'].str.split(' ', expand=True)

    # Drop the original "Date & Time" column
    df.drop(columns=['Date & Time'], inplace=True)

    # Reorder the columns to have 'Date' and 'Time' first, and keep the rest as is
    columns_order = ['Date', 'Time'] + [col for col in df.columns if col not in ['Date', 'Time']]
    df = df[columns_order]
    
    # Save the modified DataFrame back to a CSV file
    df.to_csv(output_csv_path, index=False)

    print(f"Date Time seperated for {input_csv_path}")
except FileNotFoundError:
    print(f"File {input_csv_path} not found.")
except pd.errors.EmptyDataError:
    print(f"File {input_csv_path} is empty.")
except Exception as e:
    print(f"An error occurred while processing {input_csv_path}: {e}")
