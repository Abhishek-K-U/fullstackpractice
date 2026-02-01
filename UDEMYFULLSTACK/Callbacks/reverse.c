#include <stdio.h>

int main() {
    int num, reversed = 0, remainder;

    printf("Enter a number: ");
    scanf("%d", &num);

    for (; num != 0; num = num / 10) {
        remainder = num % 10;                    // Get last digit
        reversed = reversed * 10 + remainder;    // Update reversed number
    }

    printf("Reversed number = %d\n", reversed);

    return 0;
}
