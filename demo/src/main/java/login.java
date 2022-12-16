import java.io.BufferedReader;
import userClasses.Pfarmaciest;
import userClasses.admin;
import userClasses.User;
import Helpers.RequestData;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.LinkedHashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Datastore.datastore1;

//import org.apache.tomcat.jni.User;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
/**
 * Servlet implementation class login
 */
@WebServlet("/login")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

     
//	 static LinkedHashMap<String,JsonObject> hm=new LinkedHashMap<String,JsonObject>(); 

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub

		   res.setContentType("application/json;charset=UTF-8");

	        try (PrintWriter out = res.getWriter()) {
	            BufferedReader br = req.getReader() ; 
	            User userlogin = new Pfarmaciest();
                
	            JsonObject jsonObject= RequestData.jsonBody(br);
	 		    JsonObjectBuilder rootBuilder = Json.createObjectBuilder();

                JsonObject root;
                JsonObject logininfo;
	            try {
	                String email = jsonObject.getString("email");
	                String password = jsonObject.getString("pass");
	                if (email.isEmpty()) {

	                    root=rootBuilder.add("response", "please enter email").build();
	        			
	                } else if (password.isEmpty()) {
	                	root=rootBuilder.add("response", "please enter password").build();
	                } else {
	    	            root=userlogin.login(jsonObject.getString("email"), jsonObject.getString("pass"),datastore1.store );
	                }

	            }catch (NullPointerException e){
	                e.printStackTrace();
	                root=rootBuilder.add("response", "please enter both email and password").build();
	            }
	          
	            out.println(root);
	            out.flush();
	            out.close();
	        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
