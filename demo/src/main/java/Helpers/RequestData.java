package Helpers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;

public class RequestData {
    public static JsonObject jsonBody(BufferedReader br) {
  	  StringBuilder sb = new StringBuilder();
  	  String str = null;
        try {
			while ((str = br.readLine()) != null) {
			      sb.append(str);
			  }
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        String json = sb.toString();


        JsonReader jsonReader = Json.createReader(new StringReader(json));
        JsonObject jsonObject = jsonReader.readObject();
        jsonReader.close();
        return jsonObject;
  	 
   }
}