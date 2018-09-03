import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guild } from '../../../../../models/guilds.model';

@Component({
  selector: 'app-guild-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class GuildViewComponent implements OnInit {

  @Input() guild: Guild;
  @Input() isModal: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit(true);
  }

}
