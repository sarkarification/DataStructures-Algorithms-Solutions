package basicAlgos;

public class RecursionDemo {

	public static void main(String[] args) {
		int data = 10;
		
		System.out.println(factorialFind(data));;
	}

	public static int factorialFind(int data) {
		int i = data;
		int fact = 1;
		
		while(i>=1) {
			fact = fact*i;
			i--;
		}
		
		return fact;
	}

}
