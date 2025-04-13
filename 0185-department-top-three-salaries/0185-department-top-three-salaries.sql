 
/* Write your PL/SQL query statement below */
SELECT D.NAME AS Department 
     , E1.NAME AS Employee
     , E1.SALARY AS Salary
  FROM EMPLOYEE E1  LEFT
 OUTER JOIN DEPARTMENT D 
    ON E1.DEPARTMENTID = D.ID 
 WHERE 3 > (SELECT COUNT(DISTINCT E2.SALARY)
         FROM EMPLOYEE E2
         WHERE E2.SALARY > E1.SALARY
           AND E1.departmentId  = E2.departmentId  )        
    
