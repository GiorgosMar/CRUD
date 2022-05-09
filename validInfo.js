module.exports = function(req, res, next) {
    const { email, password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if(req.path === "/login") {
      if(![email, password].every(Boolean)) {
        return res.json("Συμπληρώστε τα πεδία!");
      }else if (!validEmail(email)) {
        return res.json("Λάθος Email!");
      }
    }
    next();
  };