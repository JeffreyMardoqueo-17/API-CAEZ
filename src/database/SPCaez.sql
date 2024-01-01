--STAR PROCEDURE

------Insertar
CREATE PROCEDURE SPInsertarDireccion
    @Nombre VARCHAR(80)
AS
BEGIN
    -- Insertar un nuevo turno en la tabla "Turno"
    INSERT INTO Direccion(Nombre)
    VALUES (@Nombre);
END;
EXEC SPInsertarDireccion @Nombre = 'CAS. Los Vasquez Canton El Zarzal, Santo Domingo de Guzman, Sonsonate';
SELECT * FROM Direccion
-----Eliminar
CREATE PROCEDURE SPEliminarDireccion
    @Id TINYINT
AS
BEGIN
    -- Eliminar un turno de la tabla "Turno" por su Id
    DELETE FROM Direccion
    WHERE Id = @Id;
END;

------MODIFICAR
CREATE PROCEDURE SPModificarDireccion
    @Id TINYINT,
    @NuevoNombre VARCHAR(80)
AS
BEGIN
    -- Modificar un turno en la tabla "Turno" por su Id
    UPDATE Direccion
    SET Nombre = @NuevoNombre
    WHERE Id = @Id;
END;
EXEC SPModificarTurno @Id = 2, @NuevoNombre = 'Turno de ma�ana'; -- Cambia 1 por el Id del turno que deseas modificar y 'Nuevo Turno' por el nuevo nombre
-----MOSTRAR
CREATE PROCEDURE SPMostrarDireccion	
AS
BEGIN
    -- Seleccionar todos los datos de la tabla "Turno"
    SELECT * FROM Direccion;
END;
EXEC SPMostrarCargos;
