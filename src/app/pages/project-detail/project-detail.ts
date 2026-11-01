import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getProjectBySlug, Project } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);

  readonly backLabel = $localize`:@@project.back:Volver a proyectos`;
  readonly metricLabel = $localize`:@@project.metricLabel:Métrica clave`;
  readonly stackLabel = $localize`:@@project.stackLabel:Stack`;
  readonly linksLabel = $localize`:@@project.linksLabel:Enlaces`;
  readonly capturesNote = $localize`:@@project.capturesNote:Capturas y logos se agregarán en Slice 2.`;
  readonly notFound = $localize`:@@project.notFound:Proyecto no encontrado.`;

  readonly project: Project | undefined = getProjectBySlug(
    this.route.snapshot.paramMap.get('slug') ?? '',
  );
}
