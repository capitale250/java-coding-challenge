

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
 * Servlet implementation class workbookacess
 */
@WebServlet("/workbookacess")
public class workbookacess extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public workbookacess() {
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
		   res.setContentType("application/json;charset=UTF-8");
	        try (PrintWriter out = res.getWriter()) {


	            BufferedReader br = req.getReader();

	            JsonObject jsonObject= login.jsonBody(br);
	            Xlsxaccess xlsx=new Xlsxaccess();
	            JsonObject list=xlsx.xlsfileaccess(jsonObject);
	
//	          
	          
	            out.println(list);
	            out.flush();
	            out.close();
	        }
	}

}
