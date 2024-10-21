const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.video,
		C3.Plugins.Timeline,
		C3.Plugins.Dictionary,
		C3.Plugins.LocalStorage,
		C3.Plugins.SpeechSynthesis,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Tween,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Behaviors.Car,
		C3.Behaviors.Bullet,
		C3.Behaviors.Fade,
		C3.Behaviors.Physics,
		C3.Plugins.NinePatch,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Platform,
		C3.Behaviors.skymen_Skymen_SpritefontDX,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Behaviors.Flash,
		C3.Plugins.TiledBg,
		C3.Plugins.Button,
		C3.Behaviors.scrollto,
		C3.Behaviors.Rotate,
		C3.Plugins.Camera3D,
		C3.Behaviors.LOS,
		C3.Plugins.Shape3D,
		C3.Behaviors.EightDir,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.NinePatch.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Behaviors.EightDir.Acts.SetEnabled,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Physics.Acts.SetLinearDamping,
		C3.Behaviors.Physics.Acts.SetAngularDamping,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetSize,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Text.Acts.SetFontFace,
		C3.Plugins.Text.Acts.SetHAlign,
		C3.Plugins.Text.Acts.SetVAlign,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.LoadState,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.scrollto.Acts.SetEnabled,
		C3.Plugins.System.Acts.ScrollY,
		C3.Plugins.System.Exps.scrolly,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.scrollx,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.EightDir.Acts.SetDefaultControls,
		C3.Behaviors.Platform.Acts.SetDefaultControls,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Pin.Acts.Unpin,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Behaviors.Tween.Cnds.OnAnyTweensFinished,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Behaviors.Car.Acts.SetEnabled,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Audio.Exps.PlaybackRate,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Button.Cnds.IsChecked,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Text.Cnds.CompareText,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.System.Acts.Signal,
		C3.Plugins.System.Exps.rgbex,
		C3.Plugins.System.Acts.WaitForSignal,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.OnLoadFailed,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.ToggleBoolInstanceVar,
		C3.Plugins.Text.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Acts.typewrite,
		C3.Plugins.Text.Acts.SetPos,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Acts.setTwParams,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.onTwStop,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.System.Exps.projectname,
		C3.Behaviors.Tween.Acts.StopTweens,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.onLetterTyped,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Behaviors.Tween.Acts.PauseTweens,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.LocalStorage.Acts.RemoveItem,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Dictionary.Acts.SetKey,
		C3.Plugins.System.Acts.SetLayerEffectParam,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Behaviors.EightDir.Cnds.IsEnabled,
		C3.Plugins.Audio.Acts.Seek,
		C3.Plugins.Dictionary.Cnds.CompareValue,
		C3.Plugins.Text.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Car.Cnds.IsMoving,
		C3.Plugins.Audio.Acts.PlayAtObject,
		C3.Plugins.System.Acts.SetLayerScale,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.SpeechSynthesis.Acts.SpeakText,
		C3.Plugins.video.Acts.MoveToBottom,
		C3.Plugins.SpeechSynthesis.Acts.StopSpeaking,
		C3.Plugins.video.Acts.Destroy,
		C3.Plugins.video.Acts.SetSource,
		C3.Plugins.video.Acts.Play,
		C3.Plugins.video.Cnds.HasEnded,
		C3.Behaviors.Tween.Acts.PauseAllTweens,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.layoutscale,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Behaviors.Platform.Cnds.IsEnabled,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.Timeline.Acts.PlayTimeline,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Cnds.CompareWidth,
		C3.Behaviors.EightDir.Acts.Stop,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Physics.Cnds.IsEnabled,
		C3.Plugins.NinePatch.Cnds.CompareY,
		C3.Plugins.NinePatch.Acts.Destroy,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Particles.Acts.SetRate,
		C3.Plugins.Particles.Acts.SetInitSpeed,
		C3.Behaviors.scrollto.Cnds.IsEnabled,
		C3.Behaviors.Tween.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetDoubleJumpEnabled,
		C3.Behaviors.Tween.Acts.StopAllTweens,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Audio.Acts.Preload,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Physics.Acts.SetImmovable,
		C3.Behaviors.Bullet.Cnds.IsEnabled,
		C3.Plugins.NinePatch.Exps.Y,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Particles.Acts.SetX,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Text.Acts.MoveToBottom,
		C3.Plugins.Text.Acts.SetWidth,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Acts.skipTw,
		C3.Behaviors.skymen_Skymen_SpritefontDX.Exps.lastLetter,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Audio.Exps.Volume
	];
};
self.C3_JsPropNameTable = [
	{Аудио: 0},
	{Клавиатура: 0},
	{Мышь: 0},
	{video: 0},
	{timeline: 0},
	{sl: 0},
	{ЛокальноеХранилище: 0},
	{СинтезРечи: 0},
	{Синусоид: 0},
	{Твинанимация: 0},
	{E: 0},
	{H: 0},
	{S: 0},
	{G: 0},
	{car_b: 0},
	{text_logo: 0},
	{v1: 0},
	{v2: 0},
	{v3: 0},
	{Твердый: 0},
	{Машина: 0},
	{Car_player: 0},
	{car1: 0},
	{car2: 0},
	{dt_hp: 0},
	{dt5: 0},
	{dt6_ops: 0},
	{dt_rub: 0},
	{dt1: 0},
	{dt2: 0},
	{dt_update: 0},
	{dt8: 0},
	{dt9: 0},
	{dt10: 0},
	{dt11: 0},
	{dt12: 0},
	{dt13: 0},
	{dt14: 0},
	{dt15: 0},
	{Story_text: 0},
	{Story_player: 0},
	{Story_mon: 0},
	{Story_npc: 0},
	{Story_error: 0},
	{Story_stol: 0},
	{map_loading: 0},
	{Пуля: 0},
	{lift1_r: 0},
	{lift1_l: 0},
	{lift_cab: 0},
	{lift_b: 0},
	{lift_ram: 0},
	{Угасание: 0},
	{ElevatorLogo: 0},
	{lift2_r: 0},
	{lift2_l: 0},
	{road1: 0},
	{road2: 0},
	{raad_gen: 0},
	{road_gen: 0},
	{road3: 0},
	{road4: 0},
	{road5: 0},
	{road6: 0},
	{Физика: 0},
	{no_blok: 0},
	{somolet: 0},
	{tree: 0},
	{tree2: 0},
	{why_9патч: 0},
	{why_lol: 0},
	{why_lol2: 0},
	{why_o1: 0},
	{why_o2: 0},
	{why_o3: 0},
	{why_s1: 0},
	{why_s2: 0},
	{why_s3: 0},
	{why_Спрайт: 0},
	{why_Спрайт10: 0},
	{why_Спрайт11: 0},
	{why_Спрайт12: 0},
	{why_Спрайт13: 0},
	{why_Спрайт14: 0},
	{why_Спрайт15: 0},
	{why_Спрайт16: 0},
	{why_Спрайт17: 0},
	{why_Спрайт18: 0},
	{why_Спрайт19: 0},
	{why_Спрайт2: 0},
	{why_Спрайт20: 0},
	{why_Спрайт21: 0},
	{why_Спрайт22: 0},
	{why_Спрайт23: 0},
	{why_Спрайт24: 0},
	{why_Спрайт25: 0},
	{Перетаскивание: 0},
	{why_Спрайт26: 0},
	{why_Спрайт27: 0},
	{why_Спрайт28: 0},
	{why_Спрайт29: 0},
	{Платформер: 0},
	{why_Спрайт3: 0},
	{why_Спрайт4: 0},
	{why_Спрайт5: 0},
	{why_Спрайт6: 0},
	{why_Спрайт7: 0},
	{why_Спрайт8: 0},
	{why_Спрайт9: 0},
	{АниматорТекста: 0},
	{why_Текст: 0},
	{why_Частицы: 0},
	{look: 0},
	{look2: 0},
	{look3: 0},
	{Прикрепить: 0},
	{pl_h1: 0},
	{Мигание: 0},
	{Спрайт10: 0},
	{Спрайт16: 0},
	{Спрайт17: 0},
	{rain1: 0},
	{rain2: 0},
	{rain3: 0},
	{Спрайт18: 0},
	{Спрайт19: 0},
	{h_boss: 0},
	{Спрайт28: 0},
	{Спрайт29: 0},
	{Спрайт4: 0},
	{Спрайт6: 0},
	{Спрайт9: 0},
	{Текст2: 0},
	{a1: 0},
	{a2: 0},
	{elevatorscrips: 0},
	{elevatorscrips2: 0},
	{monster1: 0},
	{momster1_upr: 0},
	{Названия: 0},
	{Спрайт: 0},
	{Спрайт11: 0},
	{Спрайт12: 0},
	{Спрайт13: 0},
	{Спрайт14: 0},
	{Спрайт15: 0},
	{Спрайт2: 0},
	{Спрайт23: 0},
	{Спрайт24: 0},
	{Спрайт25: 0},
	{Спрайт26: 0},
	{Спрайт27: 0},
	{Спрайт3: 0},
	{Спрайт5: 0},
	{Текст: 0},
	{rub: 0},
	{grass: 0},
	{but_ef: 0},
	{but_inf: 0},
	{d_a4: 0},
	{Спрайт21: 0},
	{Спрайт30: 0},
	{СледитьЗа: 0},
	{Спрайт31: 0},
	{Спрайт32: 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Текст3: 0},
	{Текст4: 0},
	{Спрайт22: 0},
	{Поворот: 0},
	{Спрайт33: 0},
	{but_voice: 0},
	{boss: 0},
	{pl_h: 0},
	{b1: 0},
	{b1_p: 0},
	{so1: 0},
	{op2_a1: 0},
	{op2_a2: 0},
	{op2_a3: 0},
	{op2_a4: 0},
	{op1_a1: 0},
	{op1_a2: 0},
	{op1_a4: 0},
	{op1_a3: 0},
	{op1_logo: 0},
	{d_p1: 0},
	{Speed: 0},
	{pl: 0},
	{d: 0},
	{IsTyping: 0},
	{tween: 0},
	{sound_d: 0},
	{AnimatorText: 0},
	{d_t1: 0},
	{d_i1: 0},
	{d_p2: 0},
	{d_p3: 0},
	{d_t2: 0},
	{d_b: 0},
	{shop: 0},
	{prod: 0},
	{buy: 0},
	{shop2: 0},
	{shop_text: 0},
	{inf: 0},
	{inf_text: 0},
	{z: 0},
	{z_text: 0},
	{rub_a: 0},
	{inv: 0},
	{rub_s: 0},
	{rub_n: 0},
	{hp_n: 0},
	{hp_a: 0},
	{help: 0},
	{help_t: 0},
	{"3DCamera": 0},
	{ПолеЗрения: 0},
	{pl1: 0},
	{"3DФигуры": 0},
	{"3DФигуры2": 0},
	{"3DФигуры3": 0},
	{"3DФигуры4": 0},
	{"3DФигуры5": 0},
	{is1: 0},
	{is2: 0},
	{is3: 0},
	{is4: 0},
	{l1: 0},
	{l2: 0},
	{Спрайт34: 0},
	{Спрайт35: 0},
	{blok_p: 0},
	{Спрайт36: 0},
	{s_pl1: 0},
	{"8Направлений": 0},
	{s_pl2: 0},
	{s_pl3: 0},
	{s_pl4: 0},
	{blocer1: 0},
	{blocer2: 0},
	{blocer3: 0},
	{blocer4: 0},
	{ef: 0},
	{sten: 0},
	{ef2: 0},
	{st1: 0},
	{st2: 0},
	{error: 0},
	{lol: 0},
	{player: 0},
	{s: 0},
	{g1: 0},
	{npc: 0},
	{player_pl: 0},
	{g2: 0},
	{pogoda: 0},
	{pogoda_text: 0},
	{drop: 0},
	{r01: 0},
	{r02: 0},
	{r03: 0},
	{r04: 0},
	{r05: 0},
	{r06: 0},
	{r07: 0},
	{r08: 0},
	{r09: 0},
	{r10: 0},
	{r11: 0},
	{r12: 0},
	{r14: 0},
	{r15: 0},
	{r17: 0},
	{r13: 0},
	{r16: 0},
	{z1: 0},
	{z2: 0},
	{z3: 0},
	{z4: 0},
	{z5: 0},
	{z6: 0},
	{z7: 0},
	{Спрайт37: 0},
	{Спрайт38: 0},
	{Спрайт39: 0},
	{Частицы: 0},
	{Спрайт40: 0},
	{Спрайт41: 0},
	{Спрайт42: 0},
	{Спрайт43: 0},
	{Спрайт20: 0},
	{Спрайт44: 0},
	{ex: 0},
	{Спрайт45: 0},
	{Спрайт46: 0},
	{Спрайт47: 0},
	{Текст5: 0},
	{Спрайт48: 0},
	{Спрайт49: 0},
	{Спрайт50: 0},
	{pl_x: 0},
	{pl_Y: 0},
	{s2: 0},
	{end: 0},
	{mario_gen1: 0},
	{mario_x_min: 0},
	{mario_x_max: 0},
	{blok_x: 0},
	{blok_x2: 0},
	{mario_dl: 0},
	{lol2: 0},
	{newopt: 0},
	{menu_bl: 0},
	{start4: 0},
	{X2: 0},
	{Y2: 0},
	{X3: 0},
	{Y3: 0},
	{X4: 0},
	{Y4: 0},
	{car: 0},
	{cargo: 0},
	{X: 0},
	{Y: 0},
	{bax: 0},
	{door_ops: 0},
	{door_ops2: 0},
	{door_ops3: 0},
	{door_portal: 0},
	{elevator_f: 0},
	{podarok: 0},
	{podarok2: 0},
	{m1_b_a1: 0},
	{m1_b_a2: 0},
	{rain: 0},
	{car_bot: 0},
	{map_bl: 0},
	{no: 0},
	{pog: 0},
	{pogoda2: 0},
	{eleators: 0},
	{eleators_st: 0},
	{elevator_lol: 0},
	{elevator_lol2: 0},
	{eleators_b1: 0},
	{eleators_b2: 0},
	{eleators_b3: 0},
	{elevator_speed: 0},
	{elevator_speed2: 0},
	{elevator_rubs: 0},
	{pol_rubs: 0},
	{eleators2: 0},
	{eleators3: 0},
	{elevator_t: 0},
	{storelol: 0},
	{story4_batte: 0},
	{infinity1: 0},
	{ptr: 0},
	{shop_lol: 0},
	{train_rub: 0},
	{train_timer: 0},
	{train_hp: 0},
	{ss1: 0},
	{ss2: 0},
	{xxxx_start_pr: 0},
	{xxxx_umn: 0},
	{xxxx_pl_all1: 0},
	{xxxx_pl_all2: 0},
	{xxxx_pl_all3: 0},
	{xxxx_pl_all4: 0},
	{why_so: 0},
	{why_so2: 0},
	{why_lol1: 0},
	{why_lol1a: 0},
	{why_as1: 0},
	{why_as2: 0},
	{why_lol3: 0},
	{why_lol4: 0},
	{why_a1: 0},
	{why_speed: 0},
	{why_r2: 0},
	{why_rs2: 0},
	{why_tr2: 0},
	{why_why6: 0},
	{why_why6a: 0},
	{why_boom: 0},
	{why_r1: 0},
	{why_rs: 0},
	{why_tr: 0},
	{why_start: 0},
	{why_ra1: 0},
	{why_ra2: 0},
	{why_bon: 0},
	{why_s: 0},
	{rubs: 0},
	{bl1: 0},
	{bl2: 0},
	{bl3: 0},
	{bl4: 0},
	{bl_player: 0},
	{text: 0},
	{text2: 0},
	{voice_text: 0},
	{Скорость: 0},
	{Герой: 0},
	{Блокировка: 0},
	{Звук: 0},
	{open_bonus_system: 0},
	{b1_k1: 0},
	{b1_k2: 0},
	{b1_k3: 0},
	{b1_k4: 0},
	{b1_k5: 0},
	{b2_k1: 0},
	{b2_k2: 0},
	{inf_b1_logo_x: 0},
	{inf_b1_logo_y: 0},
	{inf_b1_logo_text_x: 0},
	{inf_b1_logo_text_y: 0},
	{inf_b1_pan_x: 0},
	{inf_b1_pan_y: 0},
	{inf_b1_img_x: 0},
	{inf_b1_img_y: 0},
	{inf_b1_text_x: 0},
	{inf_b1_text_y: 0},
	{b_opt: 0},
	{ui: 0},
	{hp: 0},
	{dream1: 0},
	{dream1_speed: 0},
	{elevator_ef: 0},
	{inf_opt: 0}
];

self.InstanceType = {
	Аудио: class extends self.IInstance {},
	Клавиатура: class extends self.IInstance {},
	Мышь: class extends self.IInstance {},
	video: class extends self.IWorldInstance {},
	timeline: class extends self.IInstance {},
	sl: class extends self.IDictionaryInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	СинтезРечи: class extends self.IInstance {},
	E: class extends self.ISpriteInstance {},
	H: class extends self.ISpriteInstance {},
	S: class extends self.ISpriteInstance {},
	G: class extends self.ISpriteInstance {},
	car_b: class extends self.ISpriteInstance {},
	text_logo: class extends self.ITextInstance {},
	v1: class extends self.ITextInstance {},
	v2: class extends self.ITextInstance {},
	v3: class extends self.ITextInstance {},
	Car_player: class extends self.ISpriteInstance {},
	car1: class extends self.ISpriteInstance {},
	car2: class extends self.ISpriteInstance {},
	dt_hp: class extends self.ISpriteInstance {},
	dt5: class extends self.ISpriteInstance {},
	dt6_ops: class extends self.ISpriteInstance {},
	dt_rub: class extends self.ISpriteInstance {},
	dt1: class extends self.ISpriteInstance {},
	dt2: class extends self.ISpriteInstance {},
	dt_update: class extends self.ISpriteInstance {},
	dt8: class extends self.ISpriteInstance {},
	dt9: class extends self.ISpriteInstance {},
	dt10: class extends self.ISpriteInstance {},
	dt11: class extends self.ISpriteInstance {},
	dt12: class extends self.ISpriteInstance {},
	dt13: class extends self.ISpriteInstance {},
	dt14: class extends self.ISpriteInstance {},
	dt15: class extends self.ISpriteInstance {},
	Story_text: class extends self.ITextInstance {},
	Story_player: class extends self.ISpriteInstance {},
	Story_mon: class extends self.ISpriteInstance {},
	Story_npc: class extends self.ISpriteInstance {},
	Story_error: class extends self.ISpriteInstance {},
	Story_stol: class extends self.ISpriteInstance {},
	map_loading: class extends self.ITextInstance {},
	lift1_r: class extends self.ISpriteInstance {},
	lift1_l: class extends self.ISpriteInstance {},
	lift_cab: class extends self.ISpriteInstance {},
	lift_b: class extends self.ISpriteInstance {},
	lift_ram: class extends self.ISpriteInstance {},
	ElevatorLogo: class extends self.ITextInstance {},
	lift2_r: class extends self.ISpriteInstance {},
	lift2_l: class extends self.ISpriteInstance {},
	road1: class extends self.ISpriteInstance {},
	road2: class extends self.ISpriteInstance {},
	road_gen: class extends self.ISpriteInstance {},
	road3: class extends self.ISpriteInstance {},
	road4: class extends self.ISpriteInstance {},
	road5: class extends self.ISpriteInstance {},
	road6: class extends self.ISpriteInstance {},
	no_blok: class extends self.ISpriteInstance {},
	somolet: class extends self.ISpriteInstance {},
	tree: class extends self.ISpriteInstance {},
	tree2: class extends self.ISpriteInstance {},
	why_9патч: class extends self.IWorldInstance {},
	why_lol: class extends self.ISpriteInstance {},
	why_lol2: class extends self.ISpriteInstance {},
	why_o1: class extends self.ITextInstance {},
	why_o2: class extends self.ITextInstance {},
	why_o3: class extends self.ITextInstance {},
	why_s1: class extends self.ITextInstance {},
	why_s2: class extends self.ITextInstance {},
	why_s3: class extends self.ITextInstance {},
	why_Спрайт: class extends self.ISpriteInstance {},
	why_Спрайт10: class extends self.ISpriteInstance {},
	why_Спрайт11: class extends self.ISpriteInstance {},
	why_Спрайт12: class extends self.ISpriteInstance {},
	why_Спрайт13: class extends self.ISpriteInstance {},
	why_Спрайт14: class extends self.ISpriteInstance {},
	why_Спрайт15: class extends self.ISpriteInstance {},
	why_Спрайт16: class extends self.ISpriteInstance {},
	why_Спрайт17: class extends self.ISpriteInstance {},
	why_Спрайт18: class extends self.ISpriteInstance {},
	why_Спрайт19: class extends self.ISpriteInstance {},
	why_Спрайт2: class extends self.ISpriteInstance {},
	why_Спрайт20: class extends self.ISpriteInstance {},
	why_Спрайт21: class extends self.ISpriteInstance {},
	why_Спрайт22: class extends self.ISpriteInstance {},
	why_Спрайт23: class extends self.ISpriteInstance {},
	why_Спрайт24: class extends self.ISpriteInstance {},
	why_Спрайт25: class extends self.ISpriteInstance {},
	why_Спрайт26: class extends self.ISpriteInstance {},
	why_Спрайт27: class extends self.ISpriteInstance {},
	why_Спрайт28: class extends self.ISpriteInstance {},
	why_Спрайт29: class extends self.ISpriteInstance {},
	why_Спрайт3: class extends self.ISpriteInstance {},
	why_Спрайт4: class extends self.ISpriteInstance {},
	why_Спрайт5: class extends self.ISpriteInstance {},
	why_Спрайт6: class extends self.ISpriteInstance {},
	why_Спрайт7: class extends self.ISpriteInstance {},
	why_Спрайт8: class extends self.ISpriteInstance {},
	why_Спрайт9: class extends self.ISpriteInstance {},
	why_Текст: class extends self.ITextInstance {},
	why_Частицы: class extends self.IParticlesInstance {},
	look: class extends self.ISpriteInstance {},
	look2: class extends self.ISpriteInstance {},
	look3: class extends self.ISpriteInstance {},
	pl_h1: class extends self.ISpriteInstance {},
	Спрайт10: class extends self.ISpriteInstance {},
	Спрайт16: class extends self.ISpriteInstance {},
	Спрайт17: class extends self.ISpriteInstance {},
	Спрайт18: class extends self.ISpriteInstance {},
	Спрайт19: class extends self.ISpriteInstance {},
	h_boss: class extends self.ISpriteInstance {},
	Спрайт28: class extends self.ISpriteInstance {},
	Спрайт29: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {},
	a1: class extends self.ITextInstance {},
	a2: class extends self.ITextInstance {},
	elevatorscrips: class extends self.ISpriteInstance {},
	elevatorscrips2: class extends self.ISpriteInstance {},
	monster1: class extends self.ISpriteInstance {},
	Названия: class extends self.ITextInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт11: class extends self.ISpriteInstance {},
	Спрайт12: class extends self.ISpriteInstance {},
	Спрайт13: class extends self.ISpriteInstance {},
	Спрайт14: class extends self.ISpriteInstance {},
	Спрайт15: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт23: class extends self.ISpriteInstance {},
	Спрайт24: class extends self.ISpriteInstance {},
	Спрайт25: class extends self.ISpriteInstance {},
	Спрайт26: class extends self.ISpriteInstance {},
	Спрайт27: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	rub: class extends self.ISpriteInstance {},
	grass: class extends self.ITiledBackgroundInstance {},
	but_ef: class extends self.IButtonInstance {},
	but_inf: class extends self.IButtonInstance {},
	d_a4: class extends self.IWorldInstance {},
	Спрайт21: class extends self.ISpriteInstance {},
	Спрайт30: class extends self.ISpriteInstance {},
	Спрайт31: class extends self.ISpriteInstance {},
	Спрайт32: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Текст3: class extends self.ITextInstance {},
	Текст4: class extends self.ITextInstance {},
	Спрайт22: class extends self.ISpriteInstance {},
	Спрайт33: class extends self.ISpriteInstance {},
	but_voice: class extends self.IButtonInstance {},
	boss: class extends self.IWorldInstance {},
	pl_h: class extends self.IWorldInstance {},
	b1: class extends self.ISpriteInstance {},
	b1_p: class extends self.ISpriteInstance {},
	so1: class extends self.IWorldInstance {},
	op2_a1: class extends self.IWorldInstance {},
	op2_a2: class extends self.ITextInstance {},
	op2_a3: class extends self.ITextInstance {},
	op2_a4: class extends self.ISpriteInstance {},
	op1_a1: class extends self.IWorldInstance {},
	op1_a2: class extends self.ISpriteInstance {},
	op1_a4: class extends self.ITextInstance {},
	op1_a3: class extends self.ITextInstance {},
	op1_logo: class extends self.IWorldInstance {},
	d_p1: class extends self.IWorldInstance {},
	d_t1: class extends self.ITextInstance {},
	d_i1: class extends self.ISpriteInstance {},
	d_p2: class extends self.IWorldInstance {},
	d_p3: class extends self.IWorldInstance {},
	d_t2: class extends self.ITextInstance {},
	d_b: class extends self.ISpriteInstance {},
	shop: class extends self.ISpriteInstance {},
	prod: class extends self.ISpriteInstance {},
	buy: class extends self.ISpriteInstance {},
	shop2: class extends self.ISpriteInstance {},
	shop_text: class extends self.ITextInstance {},
	inf: class extends self.ISpriteInstance {},
	inf_text: class extends self.ITextInstance {},
	z: class extends self.ISpriteInstance {},
	z_text: class extends self.ITextInstance {},
	rub_a: class extends self.ISpriteInstance {},
	inv: class extends self.ISpriteInstance {},
	rub_n: class extends self.ITextInstance {},
	hp_n: class extends self.ITextInstance {},
	hp_a: class extends self.ISpriteInstance {},
	help: class extends self.IWorldInstance {},
	help_t: class extends self.ITextInstance {},
	_3DCamera: class extends self.IInstance {},
	pl1: class extends self.ISpriteInstance {},
	_3DФигуры: class extends self.I3DShapeInstance {},
	_3DФигуры2: class extends self.I3DShapeInstance {},
	_3DФигуры3: class extends self.I3DShapeInstance {},
	_3DФигуры4: class extends self.I3DShapeInstance {},
	_3DФигуры5: class extends self.I3DShapeInstance {},
	is1: class extends self.ISpriteInstance {},
	is2: class extends self.ISpriteInstance {},
	is3: class extends self.ISpriteInstance {},
	is4: class extends self.ISpriteInstance {},
	l1: class extends self.ISpriteInstance {},
	l2: class extends self.ISpriteInstance {},
	Спрайт34: class extends self.ISpriteInstance {},
	Спрайт35: class extends self.ISpriteInstance {},
	Спрайт36: class extends self.ISpriteInstance {},
	s_pl1: class extends self.ISpriteInstance {},
	s_pl2: class extends self.ISpriteInstance {},
	s_pl3: class extends self.ISpriteInstance {},
	s_pl4: class extends self.ISpriteInstance {},
	blocer1: class extends self.ISpriteInstance {},
	blocer2: class extends self.ISpriteInstance {},
	blocer3: class extends self.ISpriteInstance {},
	blocer4: class extends self.ISpriteInstance {},
	ef: class extends self.ISpriteInstance {},
	sten: class extends self.ISpriteInstance {},
	ef2: class extends self.ISpriteInstance {},
	st1: class extends self.ISpriteInstance {},
	st2: class extends self.ISpriteInstance {},
	error: class extends self.ITextInstance {},
	player: class extends self.ISpriteInstance {},
	g1: class extends self.ISpriteInstance {},
	npc: class extends self.ISpriteInstance {},
	player_pl: class extends self.ISpriteInstance {},
	g2: class extends self.ISpriteInstance {},
	pogoda: class extends self.ISpriteInstance {},
	pogoda_text: class extends self.ITextInstance {},
	drop: class extends self.ISpriteInstance {},
	r01: class extends self.ISpriteInstance {},
	r02: class extends self.ISpriteInstance {},
	r03: class extends self.ISpriteInstance {},
	r04: class extends self.ISpriteInstance {},
	r05: class extends self.ISpriteInstance {},
	r06: class extends self.ISpriteInstance {},
	r07: class extends self.ISpriteInstance {},
	r08: class extends self.ISpriteInstance {},
	r09: class extends self.ISpriteInstance {},
	r10: class extends self.ISpriteInstance {},
	r11: class extends self.ISpriteInstance {},
	r12: class extends self.ISpriteInstance {},
	r14: class extends self.ISpriteInstance {},
	r15: class extends self.ISpriteInstance {},
	r17: class extends self.ISpriteInstance {},
	r13: class extends self.ISpriteInstance {},
	r16: class extends self.ISpriteInstance {},
	z1: class extends self.ISpriteInstance {},
	z2: class extends self.ISpriteInstance {},
	z3: class extends self.ISpriteInstance {},
	z4: class extends self.ISpriteInstance {},
	z5: class extends self.ISpriteInstance {},
	z6: class extends self.ISpriteInstance {},
	z7: class extends self.ISpriteInstance {},
	Спрайт37: class extends self.ISpriteInstance {},
	Спрайт38: class extends self.ISpriteInstance {},
	Спрайт39: class extends self.ISpriteInstance {},
	Частицы: class extends self.IParticlesInstance {},
	Спрайт40: class extends self.ISpriteInstance {},
	Спрайт41: class extends self.ISpriteInstance {},
	Спрайт42: class extends self.ISpriteInstance {},
	Спрайт43: class extends self.ISpriteInstance {},
	Спрайт20: class extends self.ISpriteInstance {},
	Спрайт44: class extends self.ISpriteInstance {},
	ex: class extends self.ISpriteInstance {},
	Спрайт45: class extends self.ISpriteInstance {},
	Спрайт46: class extends self.ISpriteInstance {},
	Спрайт47: class extends self.ISpriteInstance {},
	Текст5: class extends self.ITextInstance {},
	Спрайт48: class extends self.ISpriteInstance {},
	Спрайт49: class extends self.ISpriteInstance {},
	Спрайт50: class extends self.ISpriteInstance {}
}