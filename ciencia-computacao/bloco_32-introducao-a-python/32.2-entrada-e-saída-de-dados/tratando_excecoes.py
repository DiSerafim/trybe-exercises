# try e except

while True:
    try:
        x = int(input("Please enter a number: "))
        print(f"thank for you number {x}")  # thank for you number *
        break
    except ValueError:
        print("Oops! that was no valid number. Try again...")  # continue..
