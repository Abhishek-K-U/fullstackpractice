# BINARY FILE OPERATIONS

import pickle
while True:
    print("\n====== BINARY FILE OPERATIONS ======")
    print("1. Write data to binary file")
    print("2. Read data from binary file")
    print("3. Append data to binary file")
    print("4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        f = open("data.dat", "wb")
        pickle.dump("Hello", f)
        f.close()
        print("Data written to binary file successfully!")

    elif choice == 2:
        try:
            f = open("data.dat", "rb")
            data = pickle.load(f)
            f.close()
            print("\n--- Binary File Content ---")
            print(data)
        except FileNotFoundError:
            print("File not found!")
      

    elif choice == 3:
        f = open("data.dat", "ab")
        pickle.dump("World", f)
        f.close()
        print(" Data appended successfully!")

    elif choice == 4:
        print("Exiting program...")
        break

    else:
        print("❌ Invalid choice! Try again.")

