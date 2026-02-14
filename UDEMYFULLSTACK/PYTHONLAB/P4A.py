def mean(a):
    print("Mean =", sum(a) / len(a))

def median(a):
    a.sort()
    print("Median =", (a[len(a)//2] + a[(len(a)-1)//2] ) / 2)

def mode(a):
    print("Mode =", max(a, key=a.count))

# Main program
numbers = [1, 2, 3, 4,5]

mean(numbers)
median(numbers)
mode(numbers)
