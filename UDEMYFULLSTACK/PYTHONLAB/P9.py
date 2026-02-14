import pandas as pd
dict_data = {
    "Name": ["Sam", "Ram"],
    "Age": [21, 22],
    "Marks": [85, 90]
}

df_dict = pd.DataFrame(dict_data)
print("\nDataFrame from Dictionary:")
print(df_dict)


list_data = [
    ["Anu", 21, 78],
    ["Ravi", 23, 90]
]

df_list = pd.DataFrame(list_data, columns=["Name", "Age", "Marks"])
print("\nDataFrame from List:")
print(df_list)


df_csv = pd.read_csv("students.csv")
print("\nDataFrame from CSV:")
print(df_csv)


print("\nStudents with Marks > 80:")
print(df_csv[df_csv["Marks"] > 80])

print("\nAverage Marks by Age:")
print(df_csv.groupby("Age")["Marks"].mean())
