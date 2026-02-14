# TEXT FILE OPERATIONS 
while True:
    print("\n====== TEXT FILE OPERATIONS ======")
    print("1. Write to file")
    print("2. Read file")
    print("3. Append to file")
    print("4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        f = open("Sample.txt", "w")
        f.write("Hello")
        f.close()
        print("Text written successfully!")

    elif choice == 2:
        try:
            f = open("Sample.txt", "r")
            content = f.read()
            f.close()
            print("\n--- File Content ---")
            print(content)
        except FileNotFoundError:
            print("File not found!")

    elif choice == 3:
        f = open("Sample.txt", "a")
        f.write("World")
        f.close()
        print("Text appended successfully!")

    elif choice == 4:
        print("Exiting program...")
        break

    else:
        print("Invalid choice! Try again.")
