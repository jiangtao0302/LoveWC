package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Test {
	public static void main(String[] args){
		String str = "12 24 56 1820 1000";
		String[] arr = str.split(" ");
		Integer[] arr2 = new Integer[5];
		int sum = 0;// 求和初始化
		for(int i=0; i<arr.length;i++){
//			System.out.println(arr[i]);
			if(arr[i].length() == 1){
				sum = Integer.parseInt(arr[i]);
			}else if(arr[i].length() == 2){
				sum = Integer.parseInt(arr[i])%10 + (Integer.parseInt(arr[i])/10)%10;
			}else if(arr[i].length() == 3){
				sum = Integer.parseInt(arr[i])%10 + (Integer.parseInt(arr[i])/10)%10 + (Integer.parseInt(arr[i])/100)%10;
			}else if(arr[i].length() == 4){
				sum = Integer.parseInt(arr[i])%10 + (Integer.parseInt(arr[i])/10)%10 + (Integer.parseInt(arr[i])/100)%10 + (Integer.parseInt(arr[i])/1000)%10;
			}else{
				sum = Integer.parseInt(arr[i])%10 + (Integer.parseInt(arr[i])/10)%10 + (Integer.parseInt(arr[i])/100)%10 + (Integer.parseInt(arr[i])/1000)%10 + (Integer.parseInt(arr[i])/10000)%10;
			}
			arr2[i] = sum;
		}
//		System.out.println(arr2[2]);
		for(int i=0;i<arr2.length-1;i++){
			for(int j=0;j<arr2.length-1-i;j++){
				if(arr2[j]>arr2[j+1]){
					int temp = arr2[j];
					arr2[j] = arr2[j+1];
					arr2[j+1] = temp;
				}
			}
		}
		for(int i=0;i<arr2.length;i++){
			System.out.print(arr2[i] + " ");
		}
	}
	
}
