
import userClasses.Physician;
import userClasses.Pfarmaciest;
import userClasses.Patient;
import userClasses.admin;
import userClasses.User;
import Helpers.RequestData;
import Datastore.datastore1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;


import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Signup
 */
@WebServlet("/Signup")
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Signup() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub
		res.setContentType("application/json;charset=UTF-8");
        try (PrintWriter out = res.getWriter()) {


            BufferedReader br = req.getReader();
            JsonObject jsonObject= RequestData.jsonBody(br);

            enum Users {
            	Pharmacis,
            	Patient,
            	Physician,
            	Admin;
            	}
            switch(Users.valueOf(jsonObject.getString("Role"))) {
              case Pharmacis:
            	  User pharmUser =new Pfarmaciest();
            	  JsonObject pharmacie =pharmUser.signup(jsonObject,datastore1.store);
            	  out.println(pharmacie);
            	  break;
              case Patient:
            	  User patientUser =new Patient();
            	  JsonObject patientInfo =patientUser.signup(jsonObject,datastore1.store);
            	  out.println(patientInfo);
            	  break;
              case Physician:
            	  User userphy =new Physician();
            	  JsonObject physicianInfo =userphy.signup(jsonObject,datastore1.store);
            	  out.println(physicianInfo);
            	  break;
              case Admin:
            	  User userAdmin =new admin();
            	  JsonObject userAdminInfo=userAdmin.signup(jsonObject,datastore1.store);
            	  out.println(userAdminInfo);
            	  break;
			default:
				break;
              
             
            }
//    
            out.flush();
            out.close();
        }
	}

}
