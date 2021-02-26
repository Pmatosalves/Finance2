import { Receita } from './../interfaces/receita';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private receitaCollection: AngularFirestoreCollection<Receita>;
  constructor(private afs: AngularFirestore) { 
    this.receitaCollection = this.afs.collection<Receita>('Receita');
  }
  getProducts() {
    return this.receitaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addReceita(receita: Receita) {
    return this.receitaCollection.add(receita)
  }

  getReceita(id: string) {
    return this.receitaCollection.doc<Receita>(id).valueChanges();
  }

  updateReceita(id: string, receita: Receita) {
    return this.receitaCollection.doc<Receita>(id).update(receita);
  }

  deleteReceita(id: string) {
    return this.receitaCollection.doc(id).delete();
  }
}
