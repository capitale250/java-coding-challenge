
import java.util.LinkedHashMap;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
class Pfarmaciest extends User {
	JsonObject signup(JsonObject data,LinkedHashMap<String,JsonObject> map) {
		JsonObject root = null;
		JsonObjectBuilder rootBuilder = Json.createObjectBuilder();
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
		JsonObject storedInfo = map.get(data.getString("email"));
		if(storedInfo!=null) {
			root=userBuilder.add("responce", "user with that email arleady exist").build();
			return root;
		}
		if(data.getString("pass").length()!=4) {
            userBuilder.add("message", "password must be equal to 4 ").add("data", data);
            root = rootBuilder.add("responce", userBuilder).build();
			
		}else {
			map.put(data.getString("email"),data);
			userBuilder.add("message", "registered successfully").add("data", data);
			root = rootBuilder.add("responce", userBuilder).build();
	
		}
		System.out.println(root);
		return root;
		
	}
	 
 

}

