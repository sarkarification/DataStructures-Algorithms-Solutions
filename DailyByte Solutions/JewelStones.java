package practiceDailyByte;

public class JewelStones {
	
	static int CharCount = 256;
	
	public static void main(String[] args) {
		String jewel = "AYOPD";
		String stones = "ayopd";
		int stonesFound = 0;
		
		char[] jewelArray = jewel.toCharArray();
		char[] stonesArray = stones.toCharArray();
		
		boolean[] count = new boolean[CharCount];
		
		for(int i=0; i<jewelArray.length; i++) {
			count[jewelArray[i] - 'A'] = true;
        }
		
		for(int i=0; i<stonesArray.length; i++) {
			if(count[stonesArray[i] -'A']) {
				stonesFound++;
			}
		}
		
		System.out.println(stonesFound);
		
	}

}
