import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
def plot_csv(file_path, column_name):
    df = pd.read_csv(file_path)
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    plt.figure(figsize=(10, 6))
    plt.plot(column_data, marker='o', linestyle='-', label=column_name)
   
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()

# def append_to_csv(df, file_name,column_name):
#     # Check if the file already exists
#     df.columns[0]=column_name
#     df1=pd.read_csv(file_name)
#     df1=pd.concat([df1,df],axis=1)
#     df1.to_csv(file_name,index=False)


def plot_csv_for_RH(file_path, column_name):
   
    df = pd.read_csv(file_path)
    
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    count_step=[0]
    count_range=[0]
    def set_step_RH(x,count_step):
        if x[1]-x[0]>22:
            print(f"faulty relative humidity : {x[0]}   {x[1]}")
            count_step[0]+=1
            return 1000
        elif x[0]-x[1]>50:
            print(f"faulty relative humidity : {x[0]}   {x[1]}")
            count_step[0]+=1
            return 1000
        else :
            return x[1]
    def set_RH(x,count_range):
        if x>103 or x<=0:
            count_range[0]+=1
            return None
        else:
            return x
    def set_None(x):
        if x==1000:
            return None
        else :
            return x
    new_data=column_data.apply(lambda x:set_RH(x,count_range))
    df[f"flag_{column_name}"]=np.where(new_data==column_data,0,1)
    new_step=new_data.rolling(window=2).apply(lambda x:set_step_RH(x,count_step),raw=True)
    df[f"flag_{column_name}"]=np.where(new_data==new_step,df[f"flag_{column_name}"],2)
    new_step=new_step.apply(set_None)
    df[f"new_{column_name}"]=new_data
    df[f"new_step_{column_name}"]=new_step
    df.to_csv("output.csv",index=False)
    #append_to_csv(new_data,'output.csv')
    df['Date'] = pd.to_datetime(df['Date'], format='%d/%m/%Y')
    plt.figure(figsize=(10, 6))
    # plt.plot(column_data, marker='o', linestyle='-', label=column_name)
    # plt.plot(new_data, marker='o', linestyle='-', label=f"new_{column_name}")
    plt.plot(new_step,marker='o',linestyle='-',label=f"new_step_{column_name}")
   
    
    plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step} ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()
def plot_csv_for_temprature(file_path, column_name):
   
    df = pd.read_csv(file_path)
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    int_data=df
    count_step=[0]
    count_range=[0]
    count_int=[0]
    
    
    def set_step_temp(x,count_step):
        if x[1]-x[0]>4 or x[1]-x[0]<-10:
            count_step[0]+=1
            print(f"faulty tempratures : {x[0]}   {x[1]}")
            return 100
        else :
            return x[1]
    def set_temp(x,count_range):
        if x>50 or x<0:
            count_range[0]+=1
            return None
        else:
            return x
    def set_None(x):
        if x==100:
            return None
        else :
            return x
    new_data=column_data.apply(lambda x:set_temp(x,count_range))
    
    
    df[f"flag_{column_name}"]=np.where(new_data==column_data,0,1)
    new_step=new_data.rolling(window=2).apply(lambda x:set_step_temp(x,count_step),raw=True)
    new_step = new_step.apply(set_None)
    df[f"flag_{column_name}"]=np.where(new_data==new_step,df[f"flag_{column_name}"],2)

    # new_step = new_data.rolling(window=2).apply(lambda x: set_step_temp(x, count_step) if not x.isna().any() else None, raw=True).dropna()
    df[f"new_{column_name}"]=new_data
    df[f"new_step_{column_name}"]=new_step
    df.to_csv("output.csv",index=False)
    #append_to_csv(new_data,'output.csv')
    plt.figure(figsize=(10, 6))
    plt.plot(column_data, marker='o', linestyle='-', label=column_name)
    # plt.plot(new_int_data, marker='o', linestyle='-', label=f"internal_{column_name}")
    plt.plot(new_data, marker='o', linestyle='-', label=f"new_{column_name}")
    # plt.scatter(new_step.index,new_step,color='r',marker='o',s=50)
   
   
    
    plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step}  ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()
def plot_csv_for_radiation(file_path, column_name):
   
    df = pd.read_csv(file_path)
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    count_step=[0]
    count_range=[0]
    
    def set_radiation(x,count_range):
        if x>2000 or x<-2:
            count_range[0]+=1
            return None
        else:
            return x
    new_data=column_data.apply(lambda x:set_radiation(x,count_range))
    df[f"flag_{column_name}"]=np.where(new_data==column_data,0,1)
    # new_step=new_data.rolling(window=2).apply(lambda x:set_step_radiation(x,count_step),raw=True).dropna()
    df[f"new_{column_name}"]=new_data
    # df[f"new_step_{column_name}"]=new_step
    df.to_csv("output.csv",index=False)
    #append_to_csv(new_data,'output.csv')
    plt.figure(figsize=(10, 6))
    plt.plot(column_data, marker='o', linestyle='-', label=column_name)
    plt.plot(new_data, marker='o', linestyle='-', label=f"new_{column_name}")
    # plt.scatter(new_step.index,new_step,color='r',marker='o',s=50)
   
    
    plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step} ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()
def plot_csv_for_rainfall(file_path, column_name):
   
    df = pd.read_csv(file_path)
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    count_step=[0]
    count_range=[0]
    # def set_step_rain(x,count_step):
    #     if x[1]-x[0]>4:
    #         count_step[0]+=1
    #         print(f"faulty rainfall : {x[0]}   {x[1]}")
    #         return 100
    #     else :
    #         return x[1]
    def set_rain(x,count_range):
        if x>50 or x<0:
            count_range[0]+=1
            return None
        else:
            return x
    new_data=column_data.apply(lambda x:set_rain(x,count_range))
    df[f"flag_{column_name}"]=np.where(new_data==column_data,0,1)
    # new_step=new_data.rolling(window=2).apply(lambda x:set_step_rain(x),raw=True).dropna()
    df[f"new_{column_name}"]=new_data
    # df[f"new_step_{column_name}"]=new_step
    output_csv_file = 'output.csv'
    df.to_csv(output_csv_file, index=False)
    plt.figure(figsize=(10, 6))
    plt.plot(column_data, marker='o', linestyle='-', label=column_name)
    plt.plot(new_data, marker='o', linestyle='-', label=f"new_{column_name}")
   
    
    plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step} ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()
def plot_csv_for_Wind_speed(file_path, column_name):
   
    df = pd.read_csv(file_path)
    if column_name not in df.columns:
        print(f"Column '{column_name}' does not exist in the CSV file.")
        return
    column_data=df[column_name]
    count_step=[0]
    count_range=[0]
    def set_step_wind(x,count_step):
        if x[1]-x[0]>20:
            count_step[0]+=1
            print(f"faulty winds : {x[0]}   {x[1]}")
            return 100
        else :
            return x[1]
    def set_wind(x,count_range):
        if x>16 or x<0:
            count_range[0]+=1
            return None
        else:
            return x
    new_data=column_data.apply(lambda x:set_wind(x,count_range))
    df[f"flag_{column_name}"]=np.where(new_data==column_data,0,1)
    new_step=new_data.rolling(window=2).apply(lambda x:set_step_wind(x,count_step),raw=True)
    df[f"new_{column_name}"]=new_data
    df[f"new_step_{column_name}"]=new_step
    df.to_csv("output.csv",index=False)
    #append_to_csv(new_data,'output.csv')
    plt.figure(figsize=(10, 6))
    plt.plot(column_data, marker='o', linestyle='-', label=column_name)
    plt.plot(new_data, marker='o', linestyle='-', label=f"new_{column_name}")
    plt.scatter(new_step.index,new_step,color='r',marker='o',s=50)
   
    
    plt.figtext(0.25, 0.008, f"faulty_range: {count_range}  faulty_step :{count_step} ", ha='left', fontsize=12, bbox={"facecolor":"orange", "alpha":0.5, "pad":5})
    plt.title(f'Plot of {column_name}')
    plt.xlabel('Index')
    plt.ylabel(column_name)
    plt.legend()
    plt.grid(True)
    plt.show()    
   
file_path = 'aws3.csv' 
plot_csv_for_temprature(file_path, 'Temp1')
plot_csv_for_RH(file_path,'RH1')
plot_csv_for_temprature(file_path, 'Temp2')
plot_csv_for_RH(file_path,'RH2')
plot_csv_for_Wind_speed(file_path,'W_Speed')
plot_csv_for_radiation(file_path,'SolarRadiation')
plot_csv_for_rainfall(file_path,'Rain')

# plot_csv(file_path,'SolarRadiation')