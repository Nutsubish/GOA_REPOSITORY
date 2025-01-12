#include <stdio.h>


 int main(void){

    printf("\n hello \n");

    // int r = 0;
    // r = printf("\n hello \n");
    // printf("raodenoba %d\n" , r);

    int r = 0; 
    if((r = printf("\n hello world \n")) < 0)
        perror("printf error");
    else
        fprintf(stdout, "amount of symbols %d\n\n",r);
    return 0;
 }