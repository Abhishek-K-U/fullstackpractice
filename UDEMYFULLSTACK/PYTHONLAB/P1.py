names = []
scores = []

n = int(input("Enter number of students: "))

for i in range(n):
    name = input("Enter name: ")
    score = int(input("Enter score: "))
    names.append(name)
    scores.append(score)

def analyze(scores):
    avg = sum(scores) / len(scores)
    print("Highest:", max(scores))
    print("Lowest:", min(scores))
    print("Average:", avg)
    return avg

avg = analyze(scores)

print("Above Average Students:")
for i in range(len(scores)):
    if scores[i] > avg:
        print(names[i])
