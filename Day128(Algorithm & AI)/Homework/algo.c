#include <stdio.h>
#include <limits.h>

int main() {
    printf("signed char range: %d to %d\n", SCHAR_MIN, SCHAR_MAX);

    printf("short int range: %d to %d\n", SHRT_MIN, SHRT_MAX);

    printf("int range: %d to %d\n", INT_MIN, INT_MAX);

    printf("long int range: %ld to %ld\n", LONG_MIN, LONG_MAX);

    printf("long long int range: %lld to %lld\n", LLONG_MIN, LLONG_MAX);
    return 0;
}

