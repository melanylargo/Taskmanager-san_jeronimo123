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
        INSTITUCION,
        name,
        genero,
        email,
        passwordHash = null
    }) {
        this.id = id;
        this.INSTITUCION = INSTITUCION;
        this.name = name;
        this.genero = genero;
        this.email = email;
        this.passwordHash = passwordHash;
    }

}