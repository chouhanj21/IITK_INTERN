import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
def plot_csv(file_path, column_name):
    df = pd.read_csv(file_path)
    df['Date'] = pd.to_datetime(df['Date'], format='%d/%m/%Y')
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    plt.figure(figsize=(10, 6))
    plt.plot(df["Date"],column_data, marker='o', linestyle='-', label=column_name)
   
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()

 
   
file_path = 'output_original.csv' 


# plot_csv('AWS_solar.csv','SolarRadiation')
# plot_csv(file_path,'new_step_Temp1')
# plot_csv(file_path,'new_step_Temp2')
plot_csv(file_path,'new_step_RH1')
# plot_csv(file_path,'new_step_RH2')
# plot_csv(file_path,'new_Rain')


