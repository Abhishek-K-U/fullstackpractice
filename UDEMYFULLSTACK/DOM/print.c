#include<stdio.h>
void main(){
    int i,n,j,space;
    printf("Enter a number: ");
    scanf("%d",&n);
    for(i=n;i>=1;i--){
        // for(space=1;space<=n;space++){
        //     printf(" ");
        // }
        for(j=1;j<=i;j++){
            printf("%d",j);
        }printf("\n");
    }
}
