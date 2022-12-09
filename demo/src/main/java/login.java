

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.LinkedHashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import org.apache.tomcat.jni.User;

import javax.json.Json;
import javax.json.JsonObject;
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
	 static LinkedHashMap<String,JsonObject> hm=new LinkedHashMap<String,JsonObject>(); 

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub

		   res.setContentType("application/json;charset=UTF-8");
	        try (PrintWriter out = res.getWriter()) {


	            BufferedReader br = req.getReader();

	            JsonObject jsonObject= jsonBody(br);
	            Pfarmaciest userw =new Pfarmaciest();
	            JsonObject usr=userw.login(jsonObject.getString("email"), jsonObject.getString("pass"),hm );
//	          
	          
	            out.println(usr);
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
