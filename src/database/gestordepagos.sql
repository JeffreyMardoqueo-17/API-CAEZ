CREATE DATABASE CAEZGestorPagosAlumnosBD
GO

USE CAEZGestorPagosAlumnosBD ---�Para poner en uso la BD

---TABLA Turno
CREATE TABLE Turno(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(80) NOT NULL,
)
GO
---Tabla Grado
CREATE TABLE Grado(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(50) NOT NULL,
)
GO
---Tabla Tipo Documento
CREATE TABLE TipoDocumento(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(80) NOT NULL,
)
GO
---Tabla tipo de pago 
CREATE TABLE TipoPago(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(80) NOT NULL,
)
GO
---Tabla Mes 
CREATE TABLE Mes(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(50) NOT NULL,
)
GO
---Tabla direcciones 
CREATE TABLE Direccion(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(200) NOT NULL,
)
GO
---Tabla Cargo
CREATE TABLE Cargo(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR(80) NOT NULL,
)
GO
CREATE TABLE Multa(
Id TINYINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR	(50) NOT NULL,
)
---- TABLA Administrador 
CREATE TABLE Administrador(
Id BIGINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR (50) NOT NULL,
Apellido VARCHAR (50) NOT NULL,
IdCargo TINYINT NOT NULL FOREIGN KEY REFERENCES Cargo(Id),
Correo VARCHAR(50) NOT NULL,
Pass VARCHAR (200) NOT NULL,
)
GO
---- TABLA ENCARGADO 
CREATE TABLE Encargado(
Id BIGINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR (50) NOT NULL,
Apellido VARCHAR (50) NOT NULL,
IdTipoDoc TINYINT NOT NULL FOREIGN KEY REFERENCES TipoDocumento(Id),
NumeroDocumento VARCHAR(50) NOT NULL,
Telefono VARCHAR(50) NOT NULL,
Direccion TINYINT NOT NULL FOREIGN KEY REFERENCES Direccion(Id),
Parentezco VARCHAR (50)
)
GO
----Tabla Alumno
CREATE TABLE Estudiante(
Id INT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR (50) NOT NULL,
Apellido VARCHAR (50) NOT NULL,
IdGrado TINYINT NOT NULL FOREIGN KEY REFERENCES Grado(Id),
IdTipoDoc TINYINT NOT NULL FOREIGN KEY REFERENCES TipoDocumento(Id),
NumeroDocumento VARCHAR(50) NOT NULL,
IdEncargado BIGINT NOT NULL FOREIGN KEY REFERENCES Encargado(Id)
)
------Tabla Factura
CREATE TABLE Factura(
    Id INT NOT NULL PRIMARY KEY IDENTITY(1,1)
)

----------SP CRUD DE LAS TABLAS SIMPLES
----------------------------------------------------------TURNO
------Insertar
CREATE PROCEDURE InsertarTurno
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO Turno (Nombre)
    VALUES (@Nombre);
END;
EXEC InsertarTurno @Nombre = 'Turno de Mañana';
SELECT * FROM Turno
-----Eliminar
CREATE PROCEDURE EliminarTurno
    @Id TINYINT
AS
BEGIN
    -- Eliminar un turno de la tabla "Turno" por su Id
    DELETE FROM Turno
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarTurno
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    -- Modificar un turno en la tabla "Turno" por su Id
    UPDATE Turno
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarTurno @Id = 2, @NuevoNombre = 'Turno de mañana'; -- Cambia 1 por el Id del turno que deseas modificar y 'Nuevo Turno' por el nuevo nombre
-----MOSTRAR
CREATE PROCEDURE SPMostrarTurnos
AS
BEGIN
    -- Seleccionar todos los datos de la tabla "Turno"
    SELECT * FROM Turno;
END;
EXEC SPMostrarTurnos;

----------------------------------------------------------GRADO
------Insertar
CREATE PROCEDURE SPInsertarGrado
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO Grado(Nombre)
    VALUES (@Nombre);
END;
EXEC SPInsertarGrado @Nombre = 'Primer Grado';
SELECT * FROM Grado
-----Eliminar
CREATE PROCEDURE SPEliminarGrado
    @Id TINYINT
AS
BEGIN
    -- Eliminar un turno de la tabla "Turno" por su Id
    DELETE FROM Grado
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarGrado
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    -- Modificar un turno en la tabla "Turno" por su Id
    UPDATE Grado
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarTurno @Id = 1, @NuevoNombre = 'Primer Grado'; -- Cambia 1 por el Id del turno que deseas modificar y 'Nuevo Turno' por el nuevo nombre
-----MOSTRAR
CREATE PROCEDURE SPMostrarGrados
AS
BEGIN
    -- Seleccionar todos los datos de la tabla "Turno"
    SELECT * FROM Grado;
END;
EXEC SPMostrarGrados;

----------------------------------------------------------Tipo Pago
------Insertar
CREATE PROCEDURE SPInsertarTipoPago
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO TipoPago(Nombre)
    VALUES (@Nombre);
END;
EXEC SPInsertarTipoPago @Nombre = 'Colegiatura';
SELECT * FROM TipoPago
-----Eliminar
CREATE PROCEDURE SPEliminarTipoPago
    @Id TINYINT
AS
BEGIN
    -- Eliminar un Tipo de pago de la tabla "Tipo Pago" por su Id
    DELETE FROM TipoPago
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarTipoPago
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    -- Modificar un tipo pago en la tabla "Tiipo pago" por su Id
    UPDATE TipoPago
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarTurno @Id = 1, @NuevoNombre = 'Cole'; 
-----MOSTRAR
CREATE PROCEDURE SPMostrarTipoPago
AS
BEGIN
    SELECT * FROM TipoPago;
END;
EXEC SPMostrarTipoPago;

----------------------------------------------------------Tipo documento 
------Insertar
CREATE PROCEDURE SPInsertarTipoDoc
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO TipoDocumento(Nombre)
    VALUES (@Nombre);
END;
EXEC SPInsertarTipoDoc @Nombre = 'DUI';
SELECT * FROM TipoDocumento
-----Eliminar
CREATE PROCEDURE SPEliminarTipoDoc
    @Id TINYINT
AS
BEGIN
    DELETE FROM TipoDocumento
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarTipoDoc
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    UPDATE TipoDocumento
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarTurno @Id = 1, @NuevoNombre = 'Cole'; 
-----MOSTRAR
CREATE PROCEDURE SPMostrarTipoDoc
AS
BEGIN
    SELECT * FROM TipoDocumento;
END;
EXEC SPMostrarTipoDoc;



----------------------------------------------------------Tipo documento 
------Insertar
CREATE PROCEDURE SPInsertarMes
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO Mes(Nombre)
    VALUES (@Nombre);
END;
EXEC SPInsertarMes @Nombre = 'Enero';
SELECT * FROM Mes
-----Eliminar
CREATE PROCEDURE SPEliminarMes
    @Id TINYINT
AS
BEGIN
    DELETE FROM Mes
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarMes
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    UPDATE Mes
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarMes @Id = 1, @NuevoNombre = 'ENero'; 
-----MOSTRAR
CREATE PROCEDURE SPMostrarMes
AS
BEGIN
    SELECT * FROM Mes;
END;
EXEC SPMostrarMes;
