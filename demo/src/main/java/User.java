import java.util.LinkedHashMap;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

abstract class User {
	abstract JsonObject signup(JsonObject data,LinkedHashMap<String,JsonObject> map);
	public JsonObject login(String email, String password, LinkedHashMap<String,JsonObject> map) {
		JsonObject root = null;
		JsonObjectBuilder rootBuilder = Json.createObjectBuilder();
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
		JsonObject storedInfo = map.get(email);

		if (null != storedInfo) {
			 String pass=storedInfo.getString("pass");
			if (pass.equals(password)) {
				userBuilder.add("message", "login successfully").add("data", storedInfo);
				root = rootBuilder.add("responce", userBuilder).build();

			}else {
				root=userBuilder.add("message", "wrong password").add("data", "null").build();
			}
		}
		if(null == storedInfo) {
		 root=userBuilder.add("message", "no user with that info").add("data", "null").build();
		}
		return root;
		
	}
       
 

}
