##############################################################################################################

# import pandas as pd
# import numpy as np
# import matplotlib.pyplot as plt
# from datetime import datetime

# file_name = 'LOGGER26.CSV'

# # Check if file exists and read the CSV file
# try:
#     data = pd.read_csv(file_name, header=None, names=[
#         'date', 'time', 'reading1', 'reading2', 'reading3',
#         'reading4','reading5','reading6'
#     ])
# except FileNotFoundError:
#     raise FileNotFoundError(f"File {file_name} does not exist")

# # Convert readings to numeric
# readings = ['reading1', 'reading2', 'reading3', 'reading4', 'reading5', 'reading6']
# for reading in readings:
#     data[reading] = pd.to_numeric(data[reading], errors='coerce')


# data['date'] = data['date'].str.strip()

# data.to_csv("output.csv", index=False)


##############################################################################################################
# import pandas as pd

# # Read the CSV file
# df = pd.read_csv('output.csv')

# # Combine 'date' and 'time' columns into a single 'date_time' column
# df['date_time'] = pd.to_datetime(df['date'] + ' ' + df['time'], dayfirst=True, errors='coerce')

# # Drop the original 'date' and 'time' columns
# df.drop(columns=['date', 'time'], inplace=True)

# # Reorder columns if necessary
# df = df[['date_time', 'reading1', 'reading2', 'reading3', 'reading4', 'reading5', 'reading6']]

# # Save the updated DataFrame to a new CSV file
# df.to_csv('updated_file.csv', index=False)


