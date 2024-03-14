import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import pg from 'pg';
import cors from 'cors';

const { Pool } = pg;

const app = express();
const PORT = 3001;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Login',
  password: 'affnsm',
  port: 5432,
});
// app.use(cors);
app.use(bodyParser.json());
app.use(cors());
app.get('/', async (req, res) => {
  console.log('Home');
res.send('Home')
});

// Signup route
  app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const hashedPassword = btoa(password); // Hash password
    // Save user to database
    // Save user to database
    pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword],
      (error, results) => {
        if (error) {
          res.send({ status: 'Failed'});
        }
        res.send({ status: 'Success'});
        console.log({ status: 'Success'});
      }
    );
  });
app.post('/login', async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;
  const hashedPassword = btoa(password); // Hash password
  // Save user to database
  pool.query(
    'SELECT id,email from users where email  = $1 and password = $2',
    [email,hashedPassword],
    (error, results) => {
      
      if (error) {
        res.send({ status: 'Failed'});
      }

      if(results.rows[0])
      {
        // res.status(200).send('User Match');
        res.send({ status: 'Success'});

      }
      else{
        res.send({ status: 'Failed'});

      }

    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
