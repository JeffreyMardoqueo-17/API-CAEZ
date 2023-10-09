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
IdEncargado
)

