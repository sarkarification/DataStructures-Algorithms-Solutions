package practiceDailyByte;

import java.math.BigInteger;

public class AddBinary {

	public static void main(String[] args) {
		String a = "11";
		String b = "1";
		BigInteger integerA = new BigInteger(a, 2);
        BigInteger integerB = new BigInteger(b, 2);
        BigInteger sum = integerA.add(integerB);
        System.out.println(sum.toString(2));
	}

}

//This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
//Note: neither binary string will contain leading 0s unless the string itself is 0
//
//Ex: Given the following binary strings...
//
//"100" + "1", return "101"
//"11" + "1", return "100"
//"1" + "0", return  "1"