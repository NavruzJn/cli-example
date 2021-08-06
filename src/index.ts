import {Command, flags} from '@oclif/command'
import axios  from 'axios'
import * as fs from 'fs'
import {Project} from './project'

class CliExample extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    token: flags.string({char: 't'}),
    // flag with a value (-n, --name=VALUE)
    filename: flags.string({char: 'o', description: 'filename to save projects'}),
    // flag with no value (-f, --force)
    projectIds: flags.string({char: 'p', description: 'project to imported'}),
  }

  async run() {
    const {flags} = this.parse(CliExample)

    const token = flags.token ?? ''

    if(!token) {

      this.log('Token undefined')
      return
    }

    const filename = flags.filename ?? `imported-${new Date().getTime()}.txt`
    const projectIds: number[] = flags.projectIds?.split(',').map((projectId) => Number(projectId)) ?? []

    let {data: projects} = await axios.get('https://api.clubhouse.io/api/v3/projects')

    if(projectIds.length > 0) {

      projects = projects.filter((project: Project) => projectIds.includes(project?.id))
    }

    fs.writeFile(filename, projects, (error) => {
      if (error) return this.log('Import process failed')

      this.log('File Created')
    });

    this.log(`Generated ${filename}`)

    if (!projects) {
      this.log('No Projects Found')
    }
  }
}

export = CliExample
