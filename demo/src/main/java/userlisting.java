
import java.util.LinkedHashMap;
import java.util.Map.Entry;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
class userlisting {
	JsonObject listusers(JsonObject data,LinkedHashMap<String,JsonObject> map) {
		JsonObject root = null;
		JsonObjectBuilder rootBuilder = Json.createObjectBuilder();
        JsonArrayBuilder userBuilder = Json.createArrayBuilder();
       
		if(data.getString("Role").equals("Admin")) {
		    for(Entry<String, JsonObject> entry:map.entrySet()){    
		    	JsonObject b=entry.getValue();  
		    	userBuilder.add(b);   
		    } 
		    
		    root = rootBuilder.add("responce", userBuilder).build();
		   
		}else {
			root = rootBuilder.add("responce", "user have to be an admin").build();
		}
		return root;
		
	}
	 
 

}

