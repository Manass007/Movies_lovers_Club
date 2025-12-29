const Student = require("../models/Student");

module.exports = (app) => {
  // ============================================
  // ======== CREATE - Insert Operations ========
  // ============================================

  // 1. Create a single student
  app.post("/api/v1/students/create", async (req, res) => {
   
  });

  // 2. Create multiple students (insertMany)
  app.post("/api/v1/students/create/bulk", async (req, res) => {
   
  });

  // ============================================
  // ========= READ - Query Operations ==========
  // ============================================

  // 3. Get all students
  app.get("/api/v1/students/get", async (req, res) => {
   
  });

  // 4. Get student by ID
  app.get("/api/v1/students/get/:id", async (req, res) => {
   
  });

  // 5. Query with OPERATORS - $gte, $in, $or
  app.get("/api/v1/students/filter", async (req, res) => {
    
  });

  // 6. REGEX Search - Find students by name pattern
  app.get("/api/v1/students/search/:name", async (req, res) => {
   
  });

  // ============================================
  // ======== UPDATE - Update Operations ========
  // ============================================

  // 7. Update student by ID
  app.put("/api/v1/students/update/:id", async (req, res) => {
  
  });

  // 8. Update with OPERATORS - $inc, $push, $set
  app.put("/api/v1/students/update/:id/operators", async (req, res) => {
   
  });

  // ============================================
  // ======== DELETE - Delete Operations ========
  // ============================================

  // 9. Delete student by ID
  app.delete("/api/v1/students/delete/:id", async (req, res) => {
  
  });

  // ============================================
  // =============== AGGREGATION ================
  // ============================================

  // 10. Aggregation - Group by course with statistics
  app.get("/api/v1/students/stats", async (req, res) => {
    
  });
};

