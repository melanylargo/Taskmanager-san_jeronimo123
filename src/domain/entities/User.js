/*
 * User Entity
 *
 * Representa un usuario dentro del dominio
 * de la aplicación.
 *
 * Esta clase NO sabe:
 * - cómo se guarda el usuario
 * - dónde se guarda
 * - cómo funciona Firestore
 * - cómo funciona LocalStorage
 * - cómo funciona la interfaz
 */

export class User {

    constructor({
        id = null,
        Institucion_Educativa,
        name,
        Tipo_de_usuario,
        genero,
        email,
        passwordHash = null,
        check,
    }) {
        this.id = id;
        this.Institucion_Educativa =Institucion_Educativa;
        this.name = name;
        this.Tipo_de_usuario=Tipo_de_usuario;
        this.genero = genero;
        this.email = email;
        this.passwordHash = passwordHash;
        this.check=check;
    }

}