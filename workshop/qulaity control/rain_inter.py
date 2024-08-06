import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Read the CSV file
file_path = 'AWS_solar.csv'  # Replace with your actual file path
data = pd.read_csv(file_path)

# Define the threshold function
def calculate_threshold(G):
    return np.exp(3.492 - 0.00342 * G)

# Calculate the threshold for each row in the dataframe
data['Date'] = pd.to_datetime(data['Date'], format='%Y-%m-%d')

data['RainThreshold'] = data['SolarRadiation'].apply(calculate_threshold)

# Compare the actual rain values with the threshold
data['new_Rain'] = np.where(data['Rain'] > data['RainThreshold'],None,data['Rain'])
none_count = data['new_Rain'].isna().sum()
print(none_count)
data['flag_rain']=np.where(data['new_Rain']==data['Rain'],0,3)

# Save the results to a new CSV file
output_file_path = 'rain_inter.csv'  # Replace with your desired output file path
data.to_csv(output_file_path, index=False)

plt.figure(figsize=(10, 6))
plt.plot(data['Date'],data['Rain'], marker='o', linestyle='-', label="Rain")
plt.plot(data['Date'],data['new_Rain'], marker='o', linestyle='-', label=f"new_Rain")


# plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step} ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
plt.title(f'Plot of Rain')
plt.xlabel('Index')
plt.ylabel("Rain")
plt.legend()
plt.grid(True)
plt.show()

print("Comparison completed and saved to", output_file_path)
