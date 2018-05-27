import Thinky from '../../db/connector'

const models: any = {}

export function getModel(name: string): string {
  return models[name]
}

export function createModel(
  name: string,
  fields: object = {},
  ...args: any[]
): any {
  const model: any = Thinky.createModel(
    name,
    {
      id: Thinky.type.string().min(2),
      createdAt: Thinky.type.date().default(Thinky.r.now()),
      updatedAt: Thinky.type.date(),
      ...fields
    },
    ...args
  )

  models[name] = model

  model.defineStatic('updateAt', function(_: any, fields: any = {}): any {
    fields.updatedAt = Thinky.r.now()
    return _.update(fields)
  })

  return model
}
