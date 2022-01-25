INSERT INTO departments (name)
VALUES
    ('Survey'),
    ('Engeneering'),
    ('Planning'),
    ('Structural');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('EIT', 50000, 2),
    ('Engineer', 90000, 2),
    ('Planner', 75000, 3),
    ('Survey Crew Chief', 45000, 1),
    ('Rod-Man', 30000, 1),
    ('Structural Eng', 90000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Justin', 'Bowman', 4, null),
    ('Taylor', 'Cannon', 4, 1),
    ('Jeremy', 'Draper', 2, null),
    ('Jeff', 'Somethingorother', 6, null),
    ('Bob', 'Vance', 3, null),
    ('Tec', 'Tone', 2, 3),
    ('Guy', 'Man', 1, 3);