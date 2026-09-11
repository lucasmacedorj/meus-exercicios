// O Mongo guarda o identificador em um campo "_id" do tipo ObjectId.
// Antes de devolver na resposta JSON, convertemos para uma string "id".
export function serializar<T extends { _id?: unknown }>(
  doc: T,
): Omit<T, '_id'> & { id: string } {
  const { _id, ...resto } = doc;
  return { id: String(_id), ...resto } as Omit<T, '_id'> & { id: string };
}
