export class Project {

  public readonly abbreviation: string

  public readonly app_url: string

  public readonly archived: boolean

  public readonly color: string

  public readonly created_at: Date

  public readonly days_to_thermometer: number

  public readonly description: string

  public readonly entity_type: string

  public readonly external_id: string

  public readonly follower_ids: string[]

  public readonly id: number

  public readonly iteration_length: number

  public readonly name: string

  public readonly show_thermometer: boolean

  public readonly start_time: Date

  public readonly stats: {
    num_points: number
    num_related_documents: number
    num_stories: number
  }

  public readonly team_id: number

  public readonly updated_at: Date

  public readonly workflow_id: number

}
