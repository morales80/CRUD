const pool = require("../db");

const getAllTaks = async (req, res) => {
  res.send("retrieven a list of task");
};

const getTask = (req, res) => {
  res.send("retornando una sola tarea");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {

    const result = await pool.query(
        "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
        [
            title, 
            description
        ]
    );
    
    res.json(result.rows[0])
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

const deleteTask = (req, res) => {
  res.send("eliminando una tarea");
};

const updateTask = (req, res) => {
  res.send("actualizando una tarea");
};

module.exports = {
  getAllTaks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
