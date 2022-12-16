
import java.io.File;  
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

 
import org.apache.poi.ss.usermodel.Cell;  
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;  
public class Xlsxaccess  {  
	JsonObject xlsfileaccess(JsonObject data){  
//obtaining input bytes from a file 
	 JsonObject root = null;
	 JsonObjectBuilder rootBuilder = Json.createObjectBuilder();
	 JsonObjectBuilder rootBuilder1 = Json.createObjectBuilder();
	 JsonArrayBuilder userBuilder = Json.createArrayBuilder();
	 
	FileInputStream fis = null;
	
	
	URL path = Xlsxaccess.class.getResource("MedicalData.xlsx");
	File f = new File(path.getFile());
	try {
		fis = new FileInputStream(f);
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}  

	XSSFWorkbook myWorkBook = null;
	try {
		myWorkBook = new XSSFWorkbook (fis);
	} catch (IOException e) {
		
		e.printStackTrace();
	}   
    
	XSSFSheet sheet=myWorkBook.getSheetAt(Integer.parseInt(data.getString("number")));  
	String sheetName = sheet.getSheetName();
	List<String> headers = new ArrayList<String>();
	for (int j = 1; j <= sheet.getLastRowNum(); j++) {
		Row row1 = sheet.getRow(j);
		if (j == 1) {
	       
	    for (int k = 0; k < row1.getLastCellNum(); k++) {
	    	double doubleNumberHeader=row1.getCell(k).getNumericCellValue();
	    	int intNumberHeader =(int)doubleNumberHeader;
	    	String StringHeader=String.valueOf(intNumberHeader);
	        headers.add("b"+StringHeader+"b");
	    }
	} else {
	
	    for (int k = 0; k < headers.size(); k++) {
	        Cell cell = row1.getCell(k);
	        String headerName = headers.get(k);
	        if (cell != null) {
	            switch (cell.getCellType()) {
	        	case Cell.CELL_TYPE_STRING:
	        		rootBuilder.add(headerName,cell.getStringCellValue());
	        		break; 
	        	case Cell.CELL_TYPE_NUMERIC:
	            		String s=String.valueOf(cell.getNumericCellValue());
	            		rootBuilder.add(headerName, s);
	            	    break; 
	            }
	               
	            }
	           
	        }
	        userBuilder.add(rootBuilder.build());
		}
	}

    root=rootBuilder1.add("responce", userBuilder).build();

    return root;

}  
} 
